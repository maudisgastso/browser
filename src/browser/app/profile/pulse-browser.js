// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Note: You must have semicolons at the end of each line in user setting files

// Enable downloading DRM.
pref('media.eme.enabled', true);

// Disable firefox's about:welcome page
pref('browser.aboutwelcome.enabled', true);

pref('pulse.welcome.enabled', true);
pref('pulse.welcome.seen', false);

// Sidebar pref
pref('pulse.sidebar.enabled', true);
pref('pulse.sidebar.extensions.enabled', true);

//PIP pref
pref('media.videocontrols.picture-in-picture.audio-toggle.enabled', true);

// This preference tells the browser that our addons are preinstalled and should
// be provided with permissions without asking
// TODO: Documentation in gluon for preference
pref('extensions.installedDistroAddon.extension@tabliss.io', true);

pref('browser.discovery.enabled', false);
pref('svg.context-properties.content.enabled', true);

// Allow the user to install unsigned addons from sources like our custom addon
// store
pref('xpinstall.signatures.required', false);
// Allow the usage of theme experiments
pref('extensions.experiments.enabled', true);

// Disable VPN promos
pref('browser.vpn_promo.enabled', false);

// Enable WebMIDI. This is still currently in testing inside of Firefox, but
// will also provide us with the benefit of more features
pref('dom.webmidi.enabled', true);

// Check for system add-on updates.
pref("extensions.systemAddon.update.url", "https://aus5.mozilla.org/update/3/SystemAddons/%CHANNEL%/update.xml");
pref("extensions.systemAddon.update.enabled", true);


#include better-fox.js
