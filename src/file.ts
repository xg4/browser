type FileReaderMethod =
  | 'readAsArrayBuffer'
  | 'readAsText'
  | 'readAsDataURL'
  | 'readAsBinaryString'

function reader(file: Blob, method: FileReaderMethod) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }

    reader.onerror = () => {
      reject(reader.error)
    }

    reader[method](file)
  })
}

export function readAsArrayBuffer(file: Blob) {
  return reader(file, 'readAsArrayBuffer')
}

export function readAsText(file: Blob) {
  return reader(file, 'readAsText')
}

export function readAsDataURL(file: Blob) {
  return reader(file, 'readAsDataURL')
}

export function readAsBinaryString(file: Blob) {
  return reader(file, 'readAsBinaryString')
}
