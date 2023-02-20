
# Team Competitions

Taking the most agonizing online tournament run by the social deduction communities of Discord, and wrapping it into a robust set of applications to do (most of) the work for us.

### Architecture

- `comps-backend`: a Rust backend server and Postgres database exposing a REST API
- `comps-discord`: a Discord bot that helps organizers run seasons of Team Comps
- `comps-website`: a React webapp for exploring and managing Team Comps data