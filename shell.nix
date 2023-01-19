{ pkgs ? import <nixpkgs> { } }:
let
  mynode = pkgs.nodejs;
  proto = pkgs.protobuf;
in
pkgs.stdenv.mkDerivation {
  name = "my-shell";
  packages = [  ];
  shellHook = "";
  buildInputs = [ 
    mynode
    proto
    ];
}
