export default function ArticleTextDisplay({ data, type }) {
    switch (type) {
      case 'p':
        return(<p className="">{data}</p>)
      case 'h2':
        return(<h2 className="text-2xl font-semibold">{data}</h2>)
      case 'h3':
        return(<h3 className="text-xl font-medium">{data}</h3>)
      case 'h4':
        return(<h4 className="text-lg font-medium">{data}</h4>)
      default:
        return(<p className="">{data}</p>)
    }
  }