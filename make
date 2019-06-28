#1/bin/bash
inotifywait -m -r --format '%f' ./ -e create -e moved_to |
  while read file; do
    if [[ "$file" =~ .*less$ ]]; then
      echo -e '\033[1;35mCompiling sass...\033[0m' &&
      for file in css/*.less; do lessc $file css/`basename $file .less`.css ; done &&
      echo -e '\033[1;32mDone.\033[0m'
    fi
    if [[ "$file" =~ .*ts$ ]] || [[ "$file" = "tsconfig.json" ]]; then
      echo -e '\033[1;35mCompiling typescript...\033[0m' &&
      tsc &&
      echo -e '\033[1;32mDone.\033[0m'
    fi
  done
