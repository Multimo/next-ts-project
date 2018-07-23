export default function fetch(url: string) {
  return new Promise((resolve, reject) => {
    console.log('mocking fetch for ', url);
    process.nextTick(
      () => 'success';
    );
  });
}