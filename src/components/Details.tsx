import React, { Component } from 'react';
import './Details.scss';
import MyPokemon from './MyPokemon';

interface Props {
  myPokemons: any;
}

interface State {
  hp: string;
  speed: string;
  attack: string;
  defense: string;
  specialA: string;
  specialD: string;
  Ahp: number;
  Aspeed: number;
  Aattack: number;
  Adefense: number;
  AspecialA: number;
  AspecialD: number;
}

class Details extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      hp: '',
      attack: '',
      defense: '',
      specialA: '',
      specialD: '',
      speed: '',
      Ahp: 0,
      Aattack: 0,
      Adefense: 0,
      AspecialA: 0,
      AspecialD: 0,
      Aspeed: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.getBest();
      // this.getAverage();
    }, 500);
  }

  getBest = () => {
    const hp = this.props.myPokemons.sort(
      (a: any, b: any) => b.stats[0].base_stat - a.stats[0].base_stat
    )[0].name;
    const attack = this.props.myPokemons.sort(
      (a: any, b: any) => b.stats[1].base_stat - a.stats[1].base_stat
    )[0].name;
    const defense = this.props.myPokemons.sort(
      (a: any, b: any) => b.stats[2].base_stat - a.stats[2].base_stat
    )[0].name;
    const specialA = this.props.myPokemons.sort(
      (a: any, b: any) => b.stats[3].base_stat - a.stats[3].base_stat
    )[0].name;
    const specialD = this.props.myPokemons.sort(
      (a: any, b: any) => b.stats[4].base_stat - a.stats[4].base_stat
    )[0].name;
    const speed = this.props.myPokemons.sort(
      (a: any, b: any) => b.stats[5].base_stat - a.stats[5].base_stat
    )[0].name;
    this.setState({
      hp: hp,
      attack: attack,
      defense: defense,
      specialA: specialA,
      specialD: specialD,
      speed: speed,
    });
  };

  // getAverage = () => {
  //   const hp = this.props.myPokemons.reduce(
  //     (a: any, b: any) => b.stats[0].base_stat + a.stats[0].base_stat
  //   );
  //   let hpAverage = hp / this.props.myPokemons.length;
  //   const attack = this.props.myPokemons.reduce(
  //     (a: any, b: any) => b.stats[1].base_stat + a.stats[1].base_stat
  //   );
  //   let attackAverage = hp / this.props.myPokemons.length;
  //   const defense = this.props.myPokemons.reduce(
  //     (a: any, b: any) => b.stats[2].base_stat + a.stats[2].base_stat
  //   );
  //   let defenseAverage = hp / this.props.myPokemons.length;
  //   const specialA = this.props.myPokemons.reduce(
  //     (a: any, b: any) => b.stats[3].base_stat + a.stats[3].base_stat
  //   );
  //   let specialAAverage = hp / this.props.myPokemons.length;
  //   const specialD = this.props.myPokemons.reduce(
  //     (a: any, b: any) => b.stats[4].base_stat + a.stats[4].base_stat
  //   );
  //   let specialDAverage = hp / this.props.myPokemons.length;
  //   const speed = this.props.myPokemons.reduce(
  //     (a: any, b: any) => b.stats[5].base_stat + a.stats[5].base_stat
  //   );
  //   let speedAverage = hp / this.props.myPokemons.length;
  //   this.setState({
  //     Ahp: hpAverage,
  //     Aattack: attackAverage,
  //     Adefense: defenseAverage,
  //     AspecialA: specialAAverage,
  //     AspecialD: specialDAverage,
  //     Aspeed: speed,
  //   });
  // };

  render() {
    return (
      <div className="Details">
        <table>
          <tr>
            <td>AVERAGE SPEED</td>
            <td>{this.state.Aspeed}</td>
          </tr>
          <tr>
            <td>AVERAGE ATTACK</td>
            <td>{this.state.Aattack}</td>
          </tr>
          <tr>
            <td>AVERAGE DEFENSE</td>
            <td>{this.state.Adefense}</td>
          </tr>
          <tr>
            <td>AVERAGE SPECIAL ATTACK</td>
            <td>{this.state.AspecialA}</td>
          </tr>
          <tr>
            <td>AVERAGE SPECIAL DEFENSE</td>
            <td>{this.state.AspecialD}</td>
          </tr>
          <tr>
            <td>AVERAGE SPEED</td>
            <td>{this.state.Aspeed}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td>HIGHEST SPEED</td>
            <td>{this.state.speed}</td>
          </tr>
          <tr>
            <td>HIGHEST ATTACK</td>
            <td>{this.state.attack}</td>
          </tr>
          <tr>
            <td>HIGHEST DEFENSE</td>
            <td>{this.state.defense}</td>
          </tr>
          <tr>
            <td>HIGHEST SPECIAL ATTACK</td>
            <td>{this.state.specialA}</td>
          </tr>
          <tr>
            <td>HIGHEST SPECIAL DEFENSE</td>
            <td>{this.state.specialD}</td>
          </tr>
          <tr>
            <td>HIGHEST SPEED</td>
            <td>{this.state.speed}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Details;
