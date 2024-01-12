# angular tree component

This is a fork of [@circlon/angular-tree-component](https://github.com/docentovich/angular-tree-component) with angular@16 support

## Getting started

Install `angular-tree-component`:

```npm install @docentovich/angular-tree-component```

Import `TreeModule`:

```
import { TreeModule } from '@docentovich/angular-tree-component';

@NgModule({
  declarations: [AppComponent],
  imports: [TreeModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Add css to `styles.scss` or include in `angular.json`:

```
@import '~@docentovich/angular-tree-component/css/angular-tree-component.css';
```

## Docs, Demos & More
We are redoing the documentation. You can find the new documentation here:
[https://circlongroup.github.io/angular-tree-component/](https://circlongroup.github.io/angular-tree-component/)

The API Reference is still in our old documentation for now:

[https://angular2-tree.readme.io/docs/](https://angular2-tree.readme.io/docs/)

## Support
[Stackoverflow](https://stackoverflow.com/questions/tagged/angular-tree-component)

[Slack Community](https://angular-tree-component.herokuapp.com/)

## Angular supported version

angular-tree-component supports angular 2 and above, and AoT compilation.

## Contributing

Run `npm run build` (`npm run build:win` for windows users) to build. Run `npm start:example-app` and open [localhost:4200](http://localhost:4200) to test your code before submitting a pull request.

To run tests locally - make sure port 4200 is available and run:

```
$ npm run build              # build:win for windows; wait until build finished 
$ npm run start:example-app  # Wait until webpack finishes and http://localhost:4200 is available
$ npm run test:dev
```

Please check the issues / project before starting to work on a feature / bug to make sure it's not already in progress.

## Contributors

This project exists thanks to all the people who contribute.
<a href="https://github.com/docentovich/angular-tree-component/graphs/contributors"><img src="https://opencollective.com/angular-tree-component/contributors.svg?width=890&button=false" /></a>
