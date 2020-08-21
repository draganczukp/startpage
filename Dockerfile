from node:14 as build

workdir /app

copy . .

run yarn install
run yarn build

from nginx as app

copy --from=build /app/dist /usr/share/nginx/html/dist
copy --from=build /app/config.json /app/index.html /app/favicon.ico /usr/share/nginx/html/
