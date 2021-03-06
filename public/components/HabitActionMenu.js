(function(exports, React, PubSub, U) {
  'use strict';

  exports.HabitActionMenu = React.createClass({
    deleteButtonPushed: function() {
      //PubSub.publish('habitDeleted', 'title', this.props.habitTitle);
      PubSub.publish('habitDeleted', this.props.habitID);
    },

    completeButtonPushed: function() {
      PubSub.publish('habitCompleted', 'habitID', this.props.habitID);
    },

    render: function() {
      var styles = {}; 

      if (this.props.hidden) {
        styles.display = 'none';
      }

      return (<div style={styles} className="habit-actions">
        <a className="link-danger" onClick={this.deleteButtonPushed}>Delete</a>
        <a className="link-success" onClick={this.completeButtonPushed}>Mark As Done</a>
      </div>);
    }
  });

})(window, React, PubSub, U);
