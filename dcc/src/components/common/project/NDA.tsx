import { observer } from 'mobx-react'
import * as React from 'react'
// import classnames from 'classnames'
import styles from './NDA.module.css'
import { InputBase, Button } from '@material-ui/core';
import bind from 'bind-decorator';
import { routerStore } from '../../../stores/routerStore';
import { TextButton, BackButton } from '../Buttons';
import { RouteComponentProps } from 'react-router';
import { dataStore } from '../../../stores/dataStore';
import { action, computed } from 'mobx';

const dummyText = `This Nondisclosure Agreement (the “Agreement”) is entered into by and between Medecalchain with its principal offices at Zug, Bahnhofplatz 43, (“Disclosing Party“) and Hans Zuckermann, located at Zürich, Bahnhofstrasse 1 (“Receiving Party“) for the purpose of preventing the unauthorized disclosure of Confidential Information as defined below. The parties agree to enter into a confidential relationship with respect to the disclosure of certain proprietary and confidential information (“Confidential Information”).
<br/><br/>
1.   Definition of Confidential Information. For purposes of this Agreement, “Confidential Information” shall include all information or material that has or could have commercial value or other utility in the business in which Disclosing Party is engaged. If Confidential Information is in written form, the Disclosing Party shall label or stamp the materials with the word “Confidential” or some similar warning. If Confidential Information is transmitted orally, the Disclosing Party shall promptly provide a writing indicating that such oral communication constituted Confidential Information.
<br/><br/>
2.   Exclusions from Confidential Information. Receiving Party’s obligations under this Agreement do not extend to information that is: (a) publicly known at the time of disclosure or subsequently becomes publicly known through no fault of the Receiving Party; (b) discovered or created by the Receiving Party before disclosure by Disclosing Party; (c) learned by the Receiving Party through legitimate means other than from the Disclosing Party or Disclosing Party’s representatives; or (d) is disclosed by Receiving Party with Disclosing Party’s prior written approval.
<br/><br/>
3.   Obligations of Receiving Party. Receiving Party shall hold and maintain the Confidential Information  in strictest confidence for the sole and exclusive benefit of the Disclosing Party. Receiving Party shall carefully restrict access to Confidential Information to employees, contractors and third parties as is reasonably required and shall require those persons to sign nondisclosure restrictions at least as protective as those in this Agreement. Receiving Party shall not, without the prior written approval of Disclosing Party, use for Receiving Party’s own benefit, publish, copy, or otherwise disclose to others, or permit the use by others for their benefit or to the detriment of Disclosing Party, any Confidential Information. Receiving Party shall return to Disclosing Party any and all records, notes, and other written, printed, or tangible materials in its possession pertaining to Confidential Information immediately if Disclosing Party requests it in writing.
<br/><br/>
4.   Time Periods. The nondisclosure provisions of this Agreement shall survive the termination of this Agreement and Receiving Party’s duty to hold Confidential Information in confidence shall remain in effect until the Confidential Information no longer qualifies as a trade secret or until Disclosing Party sends Receiving Party written notice releasing Receiving Party from this Agreement, whichever occurs first.
<br/><br/>
5.   Relationships. Nothing contained in this Agreement shall be deemed to constitute either party a partner, joint venturer or employee of the other party for any purpose.
<br/><br/>
6.  Severability. If a court finds any provision of this Agreement invalid or unenforceable, the remainder of this Agreement shall be interpreted so as to best to effect the intent of the parties.
<br/><br/>
7.   Integration. This Agreement expresses the complete understanding of the parties with respect to the subject matter and supersedes all prior proposals, agreements, representations, and understandings. This Agreement may not be amended except in a writing signed by both parties.
<br/><br/>
8.   Waiver. The failure to exercise any right provided in this Agreement shall not be a waiver of prior or subsequent rights.
<br/><br/>
9.   Notice of Immunity [OPTIONAL]. Employee is provided notice that an individual shall not be held criminally or civilly liable under any federal or state trade secret law for the disclosure of a trade secret that is made (i) in confidence to a federal, state, or local government official, either directly or indirectly, or to an attorney; and (ii) solely for the purpose of reporting or investigating a suspected violation of law; or is made in a complaint or other document filed in a lawsuit or other proceeding, if such filing is made under seal. An individual who files a lawsuit for retaliation by an employer for reporting a suspected violation of law may disclose the trade secret to the attorney of the individual and use the trade secret information in the court proceeding, if the individual (i) files any document containing the trade secret under seal; and (ii) does not disclose the trade secret, except pursuant to court order.
<br/><br/>
This Agreement and each party’s obligations shall be binding on the representatives, assigns and successors of such party. Each party has signed this Agreement through its authorized representative.`

type MatchParams = {
  id: string
}

interface INDAProps extends RouteComponentProps<MatchParams>{

}

@observer
export class NDA extends React.Component<INDAProps> {

  @computed
  get ndaSigned () {
    return dataStore.projects && dataStore.projects[this.props.match.params.id].nda
  }

  @bind
  @action
  acceptNDA () {
    routerStore.push('/' + this.props.match.params.id + '/data')
    if (!('nda' in dataStore.projects[this.props.match.params.id])) {
      dataStore.projects[this.props.match.params.id].nda = true
    } else {
      dataStore.projects[this.props.match.params.id].nda = !dataStore.projects[this.props.match.params.id].nda
    }
  }

  render () {

    const logo: JSX.Element = <div className={styles.logo}>
    </div>

    return (
      <div className={styles.container}>
        <BackButton onClick={!this.ndaSigned ? () => routerStore.push('/' + this.props.match.params.id) : routerStore.goBack}/>
        <div className={styles.title}>NDA</div>
        {logo}
        <div className={styles.textBox}>
          <div className={styles.text} dangerouslySetInnerHTML={{__html: dummyText}}>
          {/* {dummyText} */}
          </div>
        </div>
        <div className={styles.button}>
            <TextButton text='Accept' onClick={this.acceptNDA}/>
         </div>
      </div>
    )
  }
}
