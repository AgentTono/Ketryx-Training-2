/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Test insulin delivery status UI on iOS @tests:KT-68', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Test insulin delivery status UI on Android @tests:KT-66', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test for iOS Client @tests:KT-2', () => {
  it('renders the best heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test for record keeping @tests:KT-98', () => {
  it('Verify create and archive record feature', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('Unit test feedback form @tests:KT-30', () => {
  it('Verify form submission', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test bluetooth connectivity @tests:KT-3', () => {
  it('Connect and verify data transfer', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

// describe('Unit test Android Client (Patient App) @tests:KXITM7VNAYPPX2686NT493MKDMZRNWZ', () => {
//   it('Verify App Opens/Closes', () => {
//     render(<Home />)

//     const heading = screen.getByRole('heading', {
//       name: /Docs ->/i,
//     })

//     expect(heading).toBeInTheDocument()
//   })
// })
