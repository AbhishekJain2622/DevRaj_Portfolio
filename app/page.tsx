"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SpaceBackground from "@/components/space-background";

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme toggle
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Sections for navigation
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      image: "/2.jpg",
      tags: ["Python", "Django", "MySql"],
    },
    {
      id: 2,
      title: "Vina Tour Travel",
      description:
        "A user-friendly travel booking platform designed for seamless tour planning and exploration.",
      image: "/6.jpg",
      tags: ["Python", "Django", "MySql"],
    },
    {
      id: 3,
      title: "Alakh Gousala",
      description:
        "Built the Alakh Gousala website under CodeStudio, focusing on showcasing the organization’s mission, donations, and activities with a clean, responsive design",
      image: "/4.jpg",
      tags: ["Php", "Laravel", "MySql"],
    },
  ];

  // Skills data
  const skills = [
    { name: "Python", level: 90 },
    { name: "Django", level: 85 },
    { name: "Php", level: 80 },
    { name: "Laravel", level: 75 },
    { name: "Javascript", level: 70 },
    { name: "MySql", level: 65 },
    { name: "React", level: 65 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Space Background */}
      <SpaceBackground theme={theme} />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <div
            className={cn(
              "mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300",
              "backdrop-blur-md bg-white/10 dark:bg-black/20",
              "border-b border-white/10 dark:border-gray-800/50"
            )}
          >
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Link href="#home" className="flex items-center space-x-2">
                  <div className="relative h-8 w-8">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-purple-400 dark:text-purple-500"
                    >
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6.5A5.5,5.5 0 0,1 17.5,12A5.5,5.5 0 0,1 12,17.5A5.5,5.5 0 0,1 6.5,12A5.5,5.5 0 0,1 12,6.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-lg text-white">
                    Devraj Pandey Portfolio
                  </span>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: sections.indexOf(section) * 0.1,
                    }}
                  >
                    <Link
                      href={`#${section.id}`}
                      className="text-white/90 hover:text-purple-400 transition-colors duration-200"
                    >
                      {section.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Theme Toggle */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </motion.button>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-white"
                  aria-label="Open menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden backdrop-blur-md bg-black/50 border-b border-white/10"
              >
                <div className="px-4 py-3 space-y-3">
                  {sections.map((section) => (
                    <Link
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-white hover:text-purple-400 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {section.label}
                    </Link>
                  ))}
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 text-white"
                  >
                    <span>
                      {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </span>
                    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>
          {/* Hero Section */}
          <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center z-10 max-w-3xl"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 mb-4"
                  >
                    Devraj Pandey
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/90 mb-8"
                  >
                    Creative Full Stack Developer
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <Link
                      href="#projects"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                      View My Work
                    </Link>
                    <Link
                      href="#contact"
                      className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Contact Me
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-16 md:py-24  bg-black/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative"
  >
  <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-2xl">
  <Image
    src="/01.jpg"
    alt="Devraj"
    fill
    className="object-contain"
  />


      {/* Optional: lighter gradient, or remove this entirely */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
    {/* Soft glowing blur background effect */}
    <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-30 blur-2xl"></div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <h3 className="text-2xl font-bold text-white">
      Hello, I'm Devraj Pandey
    </h3>
    <p className="text-white/80">
      I'm a passionate full-stack developer dedicated to crafting clean,
      functional, and user-focused digital experiences. I specialize in
      building scalable applications using modern technologies like React,
      Node.js, and JavaScript frameworks.
    </p>
    <p className="text-white/80">
      Currently working as a Backend Developer at CodeStudio, I focus on
      building efficient server-side logic and optimizing APIs and database
      interactions. I enjoy solving real-world problems and constantly evolving
      with the latest in web development.
    </p>

    <div className="grid grid-cols-2 gap-4 pt-4">
      {[
        { label: "Freelance Role", value: "Backend Developer" },
        { label: "Projects", value: "5+" },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl"
        >
          <div className="text-purple-400 font-bold text-xl md:text-2xl">
            {item.value}
          </div>
          <div className="text-white/70 text-sm">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>

            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  My Projects
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
                <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                  Here are some of my recent projects. Each project is a unique
                  piece of development.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-purple-600/80 text-white px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 mb-4">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link
                          href="#"
                          className="text-purple-400 font-medium hover:text-purple-300 transition-colors"
                        >
                          View Details
                        </Link>
                        <Link
                          href="#"
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          <Github size={20} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href="#"
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  View All Projects
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 md:py-24  bg-black/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  My Skills
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
                <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                  I've worked with a variety of technologies and frameworks in
                  the web development ecosystem.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-white">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-white/70">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto"
              >
                {[
                  "Python",
                  "Django",
                  "React",
                  "Next.js",
                  "Php",
                  "Laravel",
                  "MySql",
                  "Git",
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                  >
                    <div className="text-sm font-medium text-white text-center">
                      {tech}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 md:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Get In Touch
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
      <p className="mt-4 text-white/80 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out to me.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white">
          Contact Information
        </h3>
        <p className="text-white/80">
          I'm currently available for freelance work or full-time positions. If you have a project that needs some creative touch, I'd love to hear about it.
        </p>

        <div className="pt-6">
          <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
          <div className="flex space-x-4 mb-8">
            {[
              { icon: <Github size={24} />, href: "https://github.com/Devraj124" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/devraj-pandey-462832259/" },
              { icon: <Twitter size={24} />, href: "https://x.com/Devrajp81050617?t=3OZ0r_KwPJOMSLJJRrzg1Q&s=08" },
              {
                icon: <Mail size={24} />,
                href: "mailto:devrajpandey0508@gmail.com"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 shadow-lg hover:text-purple-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-transparent backdrop-blur-md">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.561209556278!2d78.44215897471159!3d23.80232808661495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981dd4063d314d3%3A0x26fbe432e56874ae!2sChhatarpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715083033900!5m2!1sen!2sin"
    width="100%"
    height="300"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-[300px] border-none"
    style={{ backgroundColor: 'transparent' }}
  ></iframe>
</div>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-8 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>

        <h3 className="text-2xl font-bold text-white mb-6">
          Send Me a Message
        </h3>

        <form className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/90 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/90 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-white/90 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              placeholder="Project Inquiry"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/90 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all duration-300"
            type="submit"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  </div>
</section>


        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-purple-400">
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6.5A5.5,5.5 0 0,1 17.5,12A5.5,5.5 0 0,1 12,17.5A5.5,5.5 0 0,1 6.5,12A5.5,5.5 0 0,1 12,6.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                  />
                </svg>
                <span className="font-bold text-white">Devraj Portfolio</span>
              </div>
              <div className="text-sm text-white/70">
                © {new Date().getFullYear()} Devraj. All rights reserved.
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://github.com/Devraj124" className="text-white/70 hover:text-purple-400">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/devraj-pandey-462832259/" className="text-white/70 hover:text-purple-400">
                  <Linkedin size={20} />
                </a>
                <a href=" https://x.com/Devrajp81050617?t=3OZ0r_KwPJOMSLJJRrzg1Q&s=08" className="text-white/70 hover:text-purple-400">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
