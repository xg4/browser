type FileReaderMethod =
  | 'readAsArrayBuffer'
  | 'readAsText'
  | 'readAsDataURL'
  | 'readAsBinaryString'

function reader(file: Blob, method: FileReaderMethod, encoding?: string) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }

    reader.onerror = () => {
      reject(reader.error)
    }

    reader[method](file, encoding)
  })
}

export function readAsArrayBuffer(file: Blob) {
  return reader(file, 'readAsArrayBuffer')
}

export function readAsText(file: Blob, encoding?: string) {
  return reader(file, 'readAsText', encoding)
}

export function readAsDataURL(file: Blob) {
  return reader(file, 'readAsDataURL')
}

export function readAsBinaryString(file: Blob) {
  return reader(file, 'readAsBinaryString')
}
