# Add affiliation integration

This PR adds a simple affiliation integration for the GitHub Pages site:
- _includes/affiliate-disclaimer.html — affiliate disclosure include
- affiliates/redirect.html — static redirect helper for affiliate links (with UTM support)
- assets/js/affiliate-consent.js — minimal consent banner for affiliate cookies/tracking
- _posts/2025-10-28-exemple-affiliation.md — example post showing usage

Please review: consent behavior and GDPR compliance, whether the redirect approach is allowed by your affiliate programs, placement of the include and script in site layout. After merge, add <script src="/assets/js/affiliate-consent.js"></script> before </body> in main layout and verify redirects and UTM tracking.