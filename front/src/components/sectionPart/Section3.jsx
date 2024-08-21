import './section.scss';

const SectionThree = () => {
  return (
    <section className="section-three">
			<div className="container">
				<div className="section-three-wrapper">
					<div className="section-three-left">
						<h3>Looking For An Attorney?</h3>
						<p>Take advantage of Avvo's search technology, detailed profiles, ratings, and reviews to evaluate and connect with attorneys.</p>
            <div className="steps">
              <div className="step">
                <h4>1. Search for Lawyers in Your Area</h4>
                <p>Enter the type of lawyer you need (practice area) and your location to start browsing profiles</p>
              </div>
              <div className="step-two">
                <h4>2. Read Reviews from Past Clients</h4>
                <p>Get detailed profiles with all of the information you need to make a hiring decision, including price, reviews, and an unbiased Avvo Rating</p>
              </div>
              <div className="step-three">
                <h4>3. Book a Consultation Online</h4>
                <p>Contact an attorney or book a consultation easily through our site so you can get the help you need without the stress</p>
              </div>
            </div>
          </div>
				<div className="section-three-right"></div>
			</div>
		</div>
	</section>
  );
}

export default SectionThree;
