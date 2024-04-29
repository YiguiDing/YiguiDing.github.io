{
  "targets": [
    {
      "target_name": "hello_world",
      "sources": [
        "src/addon.cc",
        "src/MyDispatcher.cc"
        ],
      "include_dirs": [
        "src/MyDispatcher.hh",
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').targets\"):node_addon_api"
      ]
    }
  ],
}
