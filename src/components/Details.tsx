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
  Ahp: string;
  Aspeed: string;
  Aattack: string;
  Adefense: string;
  AspecialA: string;
  AspecialD: string;
  totalBaseExp: number;
  averageBaseExp: string;
  averageHeight: string;
  averageWeight: string;
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
      Ahp: '',
      Aattack: '',
      Adefense: '',
      AspecialA: '',
      AspecialD: '',
      Aspeed: '',
      totalBaseExp: 0,
      averageBaseExp: '',
      averageWeight: '',
      averageHeight: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.getBest();
      this.getBasic();
      this.getAverage();
    }, 500);
  }

  getBasic = () => {
    if (this.props.myPokemons.length > 1) {
      let totalBaseExp = 0;
      for (const pokemon of this.props.myPokemons)
        totalBaseExp += pokemon.base_experience;
      let totalHeight = 0;
      for (const pokemon of this.props.myPokemons)
        totalHeight += pokemon.height;
      let totalWeight = 0;
      for (const pokemon of this.props.myPokemons)
        totalWeight += pokemon.weight;
      let averageBaseExp = (
        totalBaseExp / this.props.myPokemons.length
      ).toFixed(2);
      let averageHeight = (totalHeight / this.props.myPokemons.length).toFixed(
        2
      );
      let averageWeight = (totalWeight / this.props.myPokemons.length).toFixed(
        2
      );
      this.setState({
        totalBaseExp: totalBaseExp,
        averageBaseExp: averageBaseExp,
        averageHeight: averageHeight,
        averageWeight: averageWeight,
      });
    } else if (this.props.myPokemons.length === 1) {
      this.setState({
        totalBaseExp: this.props.myPokemons[0].base_experience,
        averageBaseExp: this.props.myPokemons[0].base_experience,
        averageHeight: this.props.myPokemons[0].height,
        averageWeight: this.props.myPokemons[0].weight,
      });
    }
  };

  getBest = () => {
    if (this.props.myPokemons.length > 0) {
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
    }
  };

  getAverage = () => {
    if (this.props.myPokemons.length > 1) {
      let hp = 0;
      for (const pokemon of this.props.myPokemons)
        hp += pokemon.stats[0].base_stat;
      let attack = 0;
      for (const pokemon of this.props.myPokemons)
        attack += pokemon.stats[1].base_stat;
      let defense = 0;
      for (const pokemon of this.props.myPokemons)
        defense += pokemon.stats[2].base_stat;
      let specialA = 0;
      for (const pokemon of this.props.myPokemons)
        specialA += pokemon.stats[3].base_stat;
      let specialD = 0;
      for (const pokemon of this.props.myPokemons)
        specialD += pokemon.stats[4].base_stat;
      let speed = 0;
      for (const pokemon of this.props.myPokemons)
        speed += pokemon.stats[5].base_stat;

      let hpAverage = (hp / this.props.myPokemons.length).toFixed(2);
      let attackAverage = (attack / this.props.myPokemons.length).toFixed(2);
      let defenseAverage = (defense / this.props.myPokemons.length).toFixed(2);
      let specialAAverage = (specialA / this.props.myPokemons.length).toFixed(
        2
      );
      let specialDAverage = (specialD / this.props.myPokemons.length).toFixed(
        2
      );
      let speedAverage = (speed / this.props.myPokemons.length).toFixed(2);
      this.setState({
        Ahp: hpAverage,
        Aattack: attackAverage,
        Adefense: defenseAverage,
        AspecialA: specialAAverage,
        AspecialD: specialDAverage,
        Aspeed: speedAverage,
      });
    } else if (this.props.myPokemons.length === 1) {
      this.setState({
        Ahp: this.props.myPokemons[0].stats[0].base_stat,
        Aattack: this.props.myPokemons[0].stats[1].base_stat,
        Adefense: this.props.myPokemons[0].stats[2].base_stat,
        AspecialA: this.props.myPokemons[0].stats[3].base_stat,
        AspecialD: this.props.myPokemons[0].stats[4].base_stat,
        Aspeed: this.props.myPokemons[0].stats[5].base_stat,
      });
      console.log(this.props.myPokemons);
    }
  };

  render() {
    return (
      <div className="Details">
        <h2 className="Details-headline">My Pokemon Stats</h2>
        <div className="Details-tables">
          <table className="Details-tables-basic">
            <tr>
              <td className="Details-tables-headline">BASIC</td>
            </tr>
            <tr>
              <td>POKEMONS</td>
              <td>{this.props.myPokemons.length}</td>
            </tr>
            <tr>
              <td>TOTAL BASE EXP</td>
              <td>{this.state.totalBaseExp}</td>
            </tr>
            <tr>
              <td>AVERAGE BASE EXP</td>
              <td>{this.state.averageBaseExp}</td>
            </tr>
            <tr>
              <td>AVERAGE HEIGHT</td>
              <td>{this.state.averageHeight}</td>
            </tr>
            <tr>
              <td>AVERAGE WEIGHT</td>
              <td>{this.state.averageWeight}</td>
            </tr>
          </table>
          <table className="Details-tables-average">
            <tr>
              <td className="Details-tables-headline">AVERAGE</td>
            </tr>
            <tr>
              <td>HP </td>
              <td>{this.state.Ahp}</td>
            </tr>
            <tr>
              <td>ATTACK </td>
              <td>{this.state.Aattack}</td>
            </tr>
            <tr>
              <td>DEFENSE </td>
              <td>{this.state.Adefense}</td>
            </tr>
            <tr>
              <td>SPECIAL ATTACK </td>
              <td>{this.state.AspecialA}</td>
            </tr>
            <tr>
              <td>SPECIAL DEFENSE </td>
              <td>{this.state.AspecialD}</td>
            </tr>
            <tr>
              <td>SPEED </td>
              <td>{this.state.Aspeed}</td>
            </tr>
          </table>
          <table className="Details-tables-best">
            <tr>
              <td className="Details-tables-headline">BEST POKEMON</td>
            </tr>
            <tr>
              <td> SPEED</td>
              <td>{this.state.speed}</td>
            </tr>
            <tr>
              <td> ATTACK</td>
              <td>{this.state.attack}</td>
            </tr>
            <tr>
              <td> DEFENSE</td>
              <td>{this.state.defense}</td>
            </tr>
            <tr>
              <td> SPECIAL ATTACK</td>
              <td>{this.state.specialA}</td>
            </tr>
            <tr>
              <td> SPECIAL DEFENSE</td>
              <td>{this.state.specialD}</td>
            </tr>
            <tr>
              <td> SPEED</td>
              <td>{this.state.speed}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Details;
