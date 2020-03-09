#bin/bash

echo "Converting...";
sha256sum $1 | awk '{print $1}'  | xargs -I '{}' mv $1 ./{}.jpg

exit 0;
