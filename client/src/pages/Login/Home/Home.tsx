import React from 'react'

interface GoogleOAuth2User {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
  }

function Home( {UserDetails}:{ UserDetails:GoogleOAuth2User}) {
  return (
    <div>Hello {UserDetails.name}</div>
  )
}

export default Home