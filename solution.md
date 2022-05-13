# Solution

## Architecture
The project has a clean and transparent division into directories. Each part of the code belongs to its category.

### Framework
I’ve decided to use React as my framework since I’m familiar with it and it’s easy to set up new project with `Create React App`.

The project also has the `React Router` for client-side routing. Each page has its own path, which could allow adding more features and make it easier to customize in the future.


### State
I used both local states (hooks) to take care of the application performance and the global state for communication between individual pages (`Redux`).

### Style
I've decided to go with `Tailwind CSS`. I have never used this library before and thought it would be fun to try something new.

### Unit tests
I've created several unit tests. The most important are the ones that check the correctness of the insurance premium calculations.
