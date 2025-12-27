import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Geolocation = {
    id: 'html5-u9-doc-3-geo',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Geolocation API',
    duration: '18 min read',
    content: `
# Deep Dive: Geolocation API

## 1. What is Geolocation?

The Geolocation API lets your website know **where the user is** in the real world. Think of it like GPS for websites.

### Real-World Uses:
- 🗺️ **Maps**: Show "You are here" marker
- 🍕 **Food Delivery**: Find restaurants near the user
- 🚗 **Ride Sharing**: Pick up location
- ☀️ **Weather Apps**: Local weather without asking for city

---

## 2. Privacy First - The Permission Popup

Location is **sensitive data**. The browser will ALWAYS ask for permission.

When you call the Geolocation API, the user sees a popup:
> "example.com wants to know your location"
> [Allow] [Block]

### Important Rules:
- You cannot bypass this popup
- If the user clicks "Block", your code must handle that gracefully
- HTTPS is required (no HTTP websites)

---

## 3. Getting the User's Location (One Time)

The simplest way to get location:

\`\`\`javascript
navigator.geolocation.getCurrentPosition(
    // Success callback
    function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(\`You are at: \${lat}, \${lon}\`);
    },
    // Error callback
    function(error) {
        console.error('Location error:', error.message);
    }
);
\`\`\`

### The Position Object Contains:
| Property | Description | Example |
|:---|:---|:---|
| \`coords.latitude\` | North-South position | 40.7128 |
| \`coords.longitude\` | East-West position | -74.0060 |
| \`coords.accuracy\` | How accurate (in meters) | 10 |
| \`coords.altitude\` | Height above sea level | 50 (or null) |
| \`coords.speed\` | How fast moving (m/s) | 5 (or null) |

---

## 4. Handling Errors (Very Important!)

**Never assume you will get the location.** Many things can go wrong:

\`\`\`javascript
function handleError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("You clicked 'Block'. We can't show your location.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Your location is not available right now.");
            break;
        case error.TIMEOUT:
            alert("Getting your location took too long. Try again.");
            break;
    }
}
\`\`\`

### Error Codes:
| Code | Meaning | Common Cause |
|:---|:---|:---|
| \`PERMISSION_DENIED\` | User said no | Clicked "Block" |
| \`POSITION_UNAVAILABLE\` | Can't determine location | No GPS, indoors |
| \`TIMEOUT\` | Took too long | Bad signal |

---

## 5. Options: Accuracy vs Speed

You can customize how the API works:

\`\`\`javascript
const options = {
    enableHighAccuracy: true,  // Use GPS (more accurate, slower)
    timeout: 5000,             // Give up after 5 seconds
    maximumAge: 0              // Always get fresh data (no cached)
};

navigator.geolocation.getCurrentPosition(success, error, options);
\`\`\`

### Trade-offs:
| Setting | High Accuracy: true | High Accuracy: false |
|:---|:---|:---|
| **Source** | GPS satellite | WiFi / Cell Tower |
| **Accuracy** | ~10 meters | ~100 meters |
| **Speed** | Slow (10+ seconds) | Fast (1-2 seconds) |
| **Battery** | High drain | Low drain |

---

## 6. Watching Position (Continuous Tracking)

For apps like running trackers or navigation, you need **continuous updates**:

\`\`\`javascript
// Start watching
const watchId = navigator.geolocation.watchPosition(
    (position) => {
        console.log('New position:', position.coords.latitude);
        updateMap(position);
    },
    (error) => {
        console.error('Watch error:', error);
    },
    { enableHighAccuracy: true }
);

// Stop watching (important for battery!)
navigator.geolocation.clearWatch(watchId);
\`\`\`

> [!TIP]
> **Always call \`clearWatch()\` when you're done!** Continuous GPS tracking drains the battery fast. Stop it when the user leaves the page or pauses the activity.

---

## 7. Showing Location on a Map

Geolocation just gives you numbers. To show a map, you need a mapping library:

### Popular Options:
- **Leaflet** (free, open source)
- **Google Maps API** (needs API key)
- **Mapbox** (prettier, has free tier)

### Basic Leaflet Example:
\`\`\`javascript
// After getting position...
const map = L.map('map').setView([lat, lon], 13);
L.marker([lat, lon]).addTo(map);
\`\`\`

---

## 8. Best Practices

### ✅ Do:
- Ask for location only when the user takes an action (clicks a button)
- Explain WHY you need their location before asking
- Provide fallback for users who decline
- Use \`enableHighAccuracy: false\` unless you really need GPS

### ❌ Don't:
- Ask for location immediately when page loads (annoying!)
- Assume the user will allow it
- Keep watching without need
- Ignore the error callback
`
};
