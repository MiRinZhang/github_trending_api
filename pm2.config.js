module.exports = {
    apps: [{
        name: "Github_trending_API",
        script: "./src/index.ts",
        watch: true,
        instances: 1,
        exec_mode: "fork",
        ignore_watch: ["node_modules", "logs", "package.json", ".git/*"],
        out_file: "./logs/github_trending.log",
        error_file: "./logs/github_trending_error.log",
        log_date_format: "YYYY-MM-DD HH:mm Z",
        combine_logs: true,
        listen_timeout: 8000,
        kill_timeout: 1600,
        env: {
            NODE_ENV: "production"
        }
    }]
};