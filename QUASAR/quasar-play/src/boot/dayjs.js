// import something here
import dayjs from 'dayjs'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (context) => {
  context.app.config.globalProperties.$dayjs =dayjs
  // something to do
}
