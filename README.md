# 🌤️ React Weather Dashboard ☀️

## Overview
This is a **React.js Weather Dashboard** application that fetches real-time weather data from the OpenWeatherMap API. It allows users to search for any city worldwide and view the current weather details as well as a 5-day forecast. The app features temperature, humidity, wind speed, weather conditions with icons, and unit conversion between Celsius and Fahrenheit.

---

## Features ✨

- 🔍 **Search** for any city and display current weather data.
- 📅 **5-day weather forecast** with daily summaries at 3 PM.
- 🌦️ **Weather condition icons** using React Icons.
- 🌡️ **Temperature unit toggle** between Celsius and Fahrenheit.
- 💾 **Local storage** saves the last searched city and automatically loads it on revisit.
- ⚠️ **Error handling** with alert prompts for invalid city names or API failures.
- 📱 Responsive and visually clean UI built with Tailwind CSS.

---

## Demo 🚀

*Insert your live demo URL here (if hosted)*

---

## Technologies Used 🛠️

- React.js (functional components with hooks)
- React Context API for global state management
- Axios for API calls
- OpenWeatherMap API for weather data
- React Icons for weather condition icons
- Tailwind CSS for styling

---

How It Works ⚙️ <br>
On load, the app retrieves the last searched city from local storage (if any). <br>

Users can search for a new city using the input field. <br>

The app fetches weather data (current + 5-day forecast) from OpenWeatherMap API. <br>

Weather data is displayed with icons representing conditions such as sunny, rainy, cloudy, or snow. <br>

Users can toggle between Celsius and Fahrenheit units. <br>

The 5-day forecast displays daily weather at 3 PM for consistency. <br>

Alerts are shown if an invalid city name is entered or if network/API errors occur. <br>



Future Improvements 🚧<br>



🔄 Implement API polling every 30 seconds to auto-refresh weather data.<br>

🚨 Replace alert-based error handling with a dedicated Error component.<br>

⚡ Use React Query or SWR for optimized data fetching and caching.<br>

🔐 Add user authentication and data saving using Supabase.<br>

🎨 Switch styling to CSS Modules or Styled Components as per assignment recommendations.<br>


API Information 🌐<br>
Weather data sourced from OpenWeatherMap API<br>

Contact 📬<br>
For any queries or feedback, contact me at:<br>
 LinkedIn:  https://www.linkedin.com/in/shashank-s-b959a127b/
GitHub: https://github.com/Shank0045<br>
