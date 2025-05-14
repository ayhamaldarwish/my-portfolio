/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Navbar = ({ navOpen }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const linkRefs = useRef([]);
    const activeBox = useRef();
    const location = useLocation();

    const navItems = [
        { label: 'Home', link: '/#home', className: 'nav-link', id: 'home' },
        { label: 'About', link: '/#about', className: 'nav-link', id: 'about' },
        { label: 'Work', link: '/#work', className: 'nav-link', id: 'work' },
        { label: 'Services', link: '/#services', className: 'nav-link', id: 'services' },
        { label: 'Projects', link: '/viewall', className: 'nav-link', id: 'projects' },
        { label: 'Contact', link: '/#contact', className: 'nav-link md:hidden', id: 'contact' },
    ];

    const initActiveBox = () => {
        const lastActiveLink = linkRefs.current[activeIndex];
        if (lastActiveLink) {
            activeBox.current.style.top = lastActiveLink.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.offsetHeight + 'px';
        }
    };

    // Update active link based on scroll position
    const handleScroll = () => {
        // Only run on homepage
        if (location.pathname !== '/') return;

        // Get all sections
        const sections = navItems
            .filter(item => item.id !== 'projects') // Exclude projects as it's a different page
            .map(item => {
                const element = document.getElementById(item.id);
                if (!element) return null;

                const rect = element.getBoundingClientRect();
                const index = navItems.findIndex(navItem => navItem.id === item.id);

                return {
                    id: item.id,
                    top: rect.top,
                    bottom: rect.bottom,
                    index
                };
            })
            .filter(Boolean);

        // Find the section that is currently in view
        const viewportHeight = window.innerHeight;
        const currentSection = sections.find(section => {
            // Section is in view if its top is above the middle of the viewport
            // and its bottom is below the middle of the viewport
            return (
                (section.top <= viewportHeight / 2 && section.bottom >= viewportHeight / 2) ||
                (section.top <= 0 && section.bottom >= 0)
            );
        });

        if (currentSection) {
            setActiveIndex(currentSection.index);
        } else if (window.scrollY <= 100) {
            // If at the top of the page, set Home as active
            setActiveIndex(0);
        }
    };

    // Handle route changes
    useEffect(() => {
        if (location.pathname === '/viewall') {
            // Set Projects as active when on the ViewAll page
            const projectsIndex = navItems.findIndex(item => item.id === 'projects');
            setActiveIndex(projectsIndex);
        } else if (location.pathname === '/' && location.hash) {
            // Handle direct navigation to a section via hash
            const sectionId = location.hash.substring(1);
            const sectionIndex = navItems.findIndex(item => item.id === sectionId);
            if (sectionIndex !== -1) {
                setActiveIndex(sectionIndex);
            }
        } else if (location.pathname === '/') {
            // On homepage without hash, default to first item or run scroll check
            handleScroll();
        }
    }, [location]);

    useEffect(() => {
        window.addEventListener('resize', initActiveBox);
        window.addEventListener('scroll', handleScroll);

        // Initial setup
        initActiveBox();

        return () => {
            window.removeEventListener('resize', initActiveBox);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeIndex, location.pathname]);

    const handleLinkClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <nav className={`navbar${navOpen ? ' active' : ''}`}>
            {navItems.map(({ label, link, className }, key) => (
                <a
                    href={link}
                    key={key}
                    ref={(el) => (linkRefs.current[key] = el)}
                    className={`${className} ${key === activeIndex ? 'active' : ''}`}
                    onClick={() => handleLinkClick(key)}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
