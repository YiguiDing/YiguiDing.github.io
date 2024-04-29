{
  "targets": [
    {
      "target_name": "hello_world",
      "sources": [
        "src/addon.cc",
        "src/MyPromiseAsyncWorker.cc"
        ],
      "include_dirs": [
        "src/MyPromiseAsyncWorker.hh",
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').targets\"):node_addon_api"
      ]
    }
  ],
}
