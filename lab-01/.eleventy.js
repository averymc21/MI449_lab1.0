

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("eleventy.js");
  eleventyConfig.addPassthroughCopy("images");
};