# barker-tools
Tools for developing the Barker project
This is curreently a work-in-progress


# Setup
Run these in the command line in the to-be parent directory of the repository. Does not apply to running the python files. 

1) `git clone https://github.com/MinhxNguyen7/barker-tools`.
2) `cd barker-tools`.
3) `npm install`.
4) (Optional) Write whatever in `app.ts` to use modules. There's probably something in there for testing, currently.
5) Add a `.env` file for environment variables (authentication information, see below).
4) `run-app`.

# `.env` format
You only need to include variables for the functionality you're using. This information might be incomplete.

[comment]: <> (marked python for syntax highlighting)
```python 
# Twitter API Keys
CLIENT_ID=
CLIENT_SECRET=
BEARER_TOKEN=

# WordPress API Keys
WORDPRESS_API_USERNAME=
WORDPRESS_APP_PASSWORD=
```
