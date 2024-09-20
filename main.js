// Mock weather data
        const mockWeatherData = {
            city: "New York",
            today: {
                temperature: 25,
                realFeel: 27,
                humidity: 60,
                windSpeed: 10,
                sunIntensity: "High",
                condition: "Sunny"
            },
            hourly: [
                { time: "9:00", temperature: 22, condition: "Sunny" },
                { time: "12:00", temperature: 26, condition: "Partly Cloudy" },
                { time: "15:00", temperature: 28, condition: "Cloudy" },
                { time: "18:00", temperature: 24, condition: "Partly Cloudy" },
                { time: "21:00", temperature: 21, condition: "Clear" }
            ],
            weekly: [
                { day: "Tuesday", temperature: 24, condition: "Sunny" },
                { day: "Wednesday", temperature: 26, condition: "Partly Cloudy" },
                { day: "Thursday", temperature: 23, condition: "Rainy" },
                { day: "Friday", temperature: 22, condition: "Cloudy" },
                { day: "Saturday", temperature: 25, condition: "Sunny" }
            ]
        };

function getWeatherIcon(condition) {
            switch (condition.toLowerCase()) {
                case "sunny": return "☀️";
                case "partly cloudy": return "⛅";
                case "cloudy": return "☁️";
                case "rainy": return "🌧️";
                case "clear": return "🌙";
                default: return "❓";
            }
        }
function displayWeather(data) {
            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = `
                <div class="weather-section">
                    <h2>Today's Weather in ${data.city}</h2>
                    <div class="weather-grid">
                        <div class="weather-item">
                            <div class="weather-icon">${getWeatherIcon(data.today.condition)}</div>
                            <p>Temperature: ${data.today.temperature}°C</p>
                            <p>Real Feel: ${data.today.realFeel}°C</p>
                            <p>Humidity: ${data.today.humidity}%</p>
                            <p>Wind Speed: ${data.today.windSpeed} km/h</p>
                            <p>Sun Intensity: ${data.today.sunIntensity}</p>
                            <p>Condition: ${data.today.condition}</p>
                        </div>
                    </div>
                </div>
                <div class="weather-section">
                    <h2>Hourly Forecast</h2>
                    <div class="weather-grid">
                        ${data.hourly.map(hour => `
                            <div class="weather-item">
                                <p>${hour.time}</p>
                                <div class="weather-icon">${getWeatherIcon(hour.condition)}</div>
                                <p>${hour.temperature}°C</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="weather-section">
                    <h2>Weekly Forecast</h2>
                    <div class="weather-grid">
                        ${data.weekly.map(day => `
                            <div class="weather-item">
                                <p>${day.day}</p>
                                <div class="weather-icon">${getWeatherIcon(day.condition)}</div>
                                <p>${day.temperature}°C</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        document.getElementById("search-form").addEventListener("submit", function(e) {
            e.preventDefault();
            const city = document.getElementById("city-input").value;
            // In a real application, you would fetch weather data for the entered city here
            // For this example, we'll just use the mock data
            mockWeatherData.city = city;
            displayWeather(mockWeatherData);
        });

        // Display initial weather data
        displayWeather(mockWeatherData);
