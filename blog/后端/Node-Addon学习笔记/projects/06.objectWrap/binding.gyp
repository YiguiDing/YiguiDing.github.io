{
  "targets": [
    {
      "target_name": "hello_world",
      "sources": [
        "src/addon.cc",
        "src/MyObject.cc"
        ],
      "include_dirs": [
        "src/MyObject.hh",
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').targets\"):node_addon_api"
      ]
    }
  ],
}
