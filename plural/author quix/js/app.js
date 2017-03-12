/** @jsx React.createElement */
(function(){

	'use strict'

	var Quiz=React.createClass({
		render: function () {

			return <div>
				{this.props.books.map(function (b) {

					return <Book title={b}/>;

				})}
			</div>;

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
			<Quiz books={['lord of the rings', 'romeo and juliet']}/>,
			document.getElementById("root")
		);

	})();
