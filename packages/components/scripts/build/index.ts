import { dest, parallel, series, src } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';

import { componentPath, pkgPath, run } from '../utils';

const removeDist = () => {
  run('pnpm run clean', pkgPath);
};

const buildStyle = () => {
  const sass = gulpSass(dartSass);

  return src(`${componentPath}/theme/**/**.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/dist/basic-kit/lib/components/theme`))
    .pipe(dest(`${pkgPath}/dist/basic-kit/es/components/theme`));
};

//打包组件
const buildComponent = async () => {
  run('pnpm run build:components', componentPath);
};

exports.default = series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
