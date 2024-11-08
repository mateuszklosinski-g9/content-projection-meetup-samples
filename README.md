# Content Projection Meetup Samples

This project contains all code samples that were used during gravity9's tech workshop - [Improve Angular components flexibility with Content Projection](https://www.meetup.com/gravity-9-tech-meetups-pl/events/302822580/?utm_medium=referr[…]tm_campaign=share-btn_savedevents_share_modal&utm_source=link)

The recording for this meetup can be found [here](https://www.youtube.com/watch?v=EaBUbMB1fB4&t=1s&ab_channel=gravity9).

# presentation-samples

In `presentation-samples` directory you can find all samples that were used during the presentation.

They are not displayed anywhere after you build and run the application. They were just used as an example for the presentation purposes.

# live-demo

`live-demo` directory contains fully functional application displaying weather data for different regions.

There are two version of the application available to use. One is before refactoring that was done during the workshops and second is after.

Default version of the app is the one **after** refactorization.

To switch to version before you need to modify the `app.config.ts` file.

```ts
import { afterRoutes, routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(afterRoutes), provideHttpClient(), provideAnimations()],
};
```

You need to replace `afterRoutes` with `routes` in `provideRouter` function.

```ts
import { afterRoutes, routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimations()],
};
```

## API key

For the Weather app to work you need to provide an API key for the `openweathermap.org` service. You can generate one for free after you create an account [here](https://home.openweathermap.org/users/sign_up).

The key needs to be added to `weather-api.service.ts` in `before` or `after` directory depending which version of the app you want to run.

```ts
  private apiKey = '';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/group';
```
