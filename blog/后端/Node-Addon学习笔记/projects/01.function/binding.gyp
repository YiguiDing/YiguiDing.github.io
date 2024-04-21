{
  "targets": [
    {
      "target_name": "hello_world",
      "sources": ["src/hello_world.cc"],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').targets\"):node_addon_api"
      ]
    }
  ],
}
