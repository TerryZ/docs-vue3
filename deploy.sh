# build project
# npm i -g cnpm --registry=https://registry.npm.taobao.org
# cnpm i
#npm i -f --registry=https://registry.npmmirror.com/
#npm run build
pnpm i
pnpm build

# clone gitee and github project

# add proxy in git global config
git config --global http.proxy http://192.168.1.100:10808
git clone https://terryz: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@github.com/TerryZ/TerryZ.github.io.git
git checkout master

cd TerryZ.github.io
rm -rf vue3
mkdir vue3

# copy builded file to vue folder
cp -r ../docs/.vitepress/dist/* vue3

git config user.email "terry5@foxmail.com"
git config user.name "TerryZ"

# git commit and push to github
git add --all vue3
git commit -m 'auto commit changes and push'
git push https://terryz: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@github.com/TerryZ/TerryZ.github.io.git
# remove proxy in git global config
git config --global --unset http.proxy