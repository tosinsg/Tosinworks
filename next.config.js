/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict Mode intentionally double-invokes effects in development
  // (mount -> cleanup -> mount again) to surface effect bugs. That's
  // useful in general, but it was a likely contributor to the About
  // section's "shows then disappears" flicker with the IntersectionObserver
  // timing. Turning it off for a calmer dev experience.
  reactStrictMode: false,
}
module.exports = nextConfig
