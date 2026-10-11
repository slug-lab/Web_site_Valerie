#!/bin/bash
# usage: shoot.sh WIDTH HEIGHT suffix pages...
W=$1; H=$2; SUF=$3; shift 3
cd "$(dirname "$0")"
for p in "$@"; do
  name=$(echo "$p" | tr -d '/'); [ -z "$name" ] && name=accueil
  chromium --headless=new --disable-gpu --hide-scrollbars --window-size=$W,$H --virtual-time-budget=3000 --screenshot="$PWD/${name}-${SUF}.png" "http://localhost:4321$p" 2>/dev/null
done
