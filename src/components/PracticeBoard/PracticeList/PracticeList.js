import React, {Component} from 'react';
import PracticeItem from '../PracticeItem/PracticeItem';

class PracticeList extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            filteredList: []
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount() {
        this.setState({
            filteredList: this.props.practices
        });
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            filteredList: nextProps.practices
        });
    }
        
    changeHandler(event) {
        let currentList = [];
        let newList = [];

        if (event.target.value !== null) {
          currentList = this.props.practices;
          newList = currentList.filter(item => {
            return item.title.toLowerCase().includes(event.target.value.toLowerCase().trim());
          });
        } 
        else {
          newList = this.props.items;
        }
        this.setState({
          filteredList: newList
        });
      }
        
        render() {
            return (
                <>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-4 col-md-5'>
                                <form className='practice-search' onSubmit={this.submitHandler}>
                                    <input placeholder='Search by name or project...' onChange={this.changeHandler}
                                        />
                                    <input type='submit' value='&#xf002;' class='fa'/>    
                                </form>
                            </div>
                        </div>   
                        <div className='row'>
                        {this.state.filteredList.map((item) => {
                            return (
                                <PracticeItem key={item.id} item={item}/>
                            )
                        })}
                    </div> 
                </>
            )
        }
}


export default PracticeList;