class Route {
  path: string

  title: string

  description: string

  constructor(path: string, title: string, description: string) {
    this.path = path
    this.title = title
    this.description = description
  }
}

class Routes {
  // landing
  HOME = new Route(
    "/",
    "Home | Legal Operations",
    "Legal Operations - High-Touch Legal Concierge with AI-Assistance"
  )
  LAWYERS = new Route(
    "/",
    "Lawyers | Legal Operations",
    "Legal Operations - High-Touch Legal Concierge with AI-Assistance"
  )
}

const ROUTES = new Routes()

export default ROUTES
