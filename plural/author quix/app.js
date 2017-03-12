/** @jsx React.createElement */
(function(){

	'use strict'

	var Quiz=React.createClass({


			getInitialState: function () {
				return {
					author:"../images/Eli_Wallach.jpg",
					books:"harry potter"

				};
			},
		render: function () {
			return (<div>
				<div className="row">
					<div className="col-md-4">
						<img src={this.state.author} className="author-image col-md-3"/>
					</div>
					<div className="col-md-7">
						{this.state.books}
					</div>
					<div className="col-md-1">
					</div>
				</div>
			</div>);

			}
		});


		var Book=React.createClass({

			render: function () {
				return <div>
								<h2> {this.props.title}</h2>
								</div>;

				}
			});


		ReactDOM.render(
			<Quiz />,
			document.getElementById("root")
		);

	})();
