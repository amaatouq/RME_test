import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";

export default class Consent extends React.Component {
  render() {
    return (
      <Centered>
        <div className="consent">
          <h2> Microsoft Research Project Participation Consent Form </h2>
          <p>
            This research project has been reviewed and approved by the
            Microsoft Research Ethics Advisory Board.
          </p>
          <h5>Introduction</h5>
          <p>
            Thank you for deciding to volunteer in a Microsoft Research project.
            The researchers are studying human complex problem solving. The
            research project will consist of solving the dorm room assignment
            problems under certain constraints to maximize students' overall
            satisfaction. Please note that you have no obligation to participate
            and you may decide to terminate your participation at any time.
            Below is a description of the research project, and your consent to
            participate. Please read this information carefully. If you agree to
            participate, click "I agree" to indicate that you have read and
            understood the information provided on this consent form.
          </p>
          <h5>Title of Research Project</h5>
          <p>Solving Problems of Dorm Room Assignment</p>
          <h5>Benefits and Risks</h5>
          <p>
            We anticipate no potential risks. The specific responses you provide
            will have no real-world impact on existing persons or institutions.
          </p>
          <h5>Personal Information</h5>
          <p>
            This waiver is intended to give you informed consent regarding your
            participation in this project and also to protect your personally
            identifiable information by not asking for specific details, such as
            your name. By clicking "I agree" at the end of this form, you are
            agreeing that you've had time to read and consider this consent
            waiver and are comfortable with what is being asked of you as a
            participant. Aside from your Mechanical Turk ID, no personal
            information will be collected during this study. Your Mechanical
            Turk ID will not be shared outside of Microsoft Research and the
            confines of this study without your permission, and will be promptly
            deleted after compensation has been successfully provided (30 days
            or less). De-identified data may be used for future research or
            given to another investigator for future use without additional
            consent.
          </p>
          <h5>Research Data & Feedback</h5>
          <p>
            You give your permission to our research team at Microsoft Research
            to collect information about your participation in the research
            project in the formats and medium ("Data") described above.
            Microsoft shall own and control all Data in connection with the
            research project. You may also provide suggestions, comments or
            other feedback ("Feedback") to Microsoft with respect to the
            research project. Feedback is entirely voluntary and the research
            team at Microsoft shall be free to use, disclose, license, or
            otherwise distribute, and exploit the Feedback and Data as
            authorized by the research participant. If you work for Microsoft,
            no Data or Feedback collected from you will be shared directly with
            anyone in your management chain. To learn more about Microsoft's
            Privacy Policy, please visit: privacy.microsoft.com.
          </p>
          <h5>Your Authority to Participate</h5>
          <p>
            You represent that you have the full right and authority to sign
            this form, and if you are a minor that you have the consent (as
            indicated below) of your legal guardian to sign and acknowledge this
            form. You assume the full risk of any injuries, damages, or losses
            you may sustain as a result of your participation in the project. In
            addition, you agree to release and hold harmless Microsoft and its
            affiliates from any and all claims that you may have now or in the
            future related to or arising from your participation in the research
            project, and you hereby waive all such claims. Microsoft will not be
            liable for any damages related to your participation in the project.
            By clicking "I agree" below, you confirm that you consent to all of
            the above. Should you have any questions concerning this project,
            please contact us at ssuri0@outlook.com.
          </p>
          <p><strong>
            Please confirm your acceptance by clicking <em>"I AGREE"</em>. Please print
            this page for your records. On behalf of Microsoft, we thank you for
            your participation.</strong>
          </p>
          <p>
            Thanks for taking time to read the consent form. If you do not want
            to do this HIT, please return it.
          </p>
          
          <button
            type="button"
            className="pt-button pt-intent-success pt-icon-tick"
            onClick={this.props.onConsent}
          >
            I AGREE
          </button>
        </div>
      </Centered>
    );
  }
}
