// import something here
import dayjs from 'dayjs'
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  // something to do
  Vue.prototype.$dayjs = dayjs
}
