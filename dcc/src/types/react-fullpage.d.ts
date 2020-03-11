declare module '@fullpage/react-fullpage' {
  import * as React from 'react'

  export interface IFPProps {
    licenseKey: string
    scrollingSpeed: number
    render: any
  }

  export class ReactFullpage extends React.Component<IFPProps> {
    
  }

  

  export default ReactFullpage
}