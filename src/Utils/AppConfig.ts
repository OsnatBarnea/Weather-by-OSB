class AppConfig {

    public readonly getWeatherFirstUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    public readonly getWeatherSectUrl = "?unitGroup=metric&key=LBXY6WN5XKG5RSQTUM67TNVRN&contentType=json";
}

export const appConfig = new AppConfig();
