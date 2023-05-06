module.exports = {
  apps: [
    {
      name: 'TODO_APP',
      script: 'main.js',
      instances: '1',
      exec_mode: 'cluster',
      max_memory_restart: '2G',
      watch: false,
      ignore_watch: ['node_modules'],
      node_args: '--max_old_space_size=8192 --expose-gc',
    },
  ],
};