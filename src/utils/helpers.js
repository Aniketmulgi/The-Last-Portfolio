/**
 * Smoothly scrolls to a specified element by its ID
 * @param {string} id - HTML element ID to scroll to
 */
export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/**
 * Formats a Date object to a 2-digit HH:MM:SS string
 * @param {Date} date
 * @returns {string}
 */
export const formatTime = (date) => {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
