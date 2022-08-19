import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {progressBarArgtypes} from "../../components/progress-bar/progress-bar.argtype";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {progressSpinnerArgtypes} from "../../components/progress-spinner/progress-spinner.argtype";

export default {
  title: 'usecases/Progress indicators',
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule]
    })
  ],
  argTypes: progressBarArgtypes,
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true
    }
  }
} as Meta;

export const Toolbar: Story = args => ({
  props: args,
  template: `
  <mat-toolbar role="heading">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
    <mat-progress-bar [bufferValue]="bufferValue" [color]="color" [mode]="mode" [value]="value"></mat-progress-bar>`
});
Toolbar.storyName = 'toolbar';


export const Fullscreen: Story = args => ({
  props: args,
  template: `
    <style>
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 15rem;
    }
    section:not(:last-child) {
        margin-block-end: 5rem;
    }
</style>
    <section>
        <mat-progress-spinner [color]="color" [mode]="mode" [value]="value" [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-progress-spinner>
        <p>Getting your files</p>
    </section>
    <section>
        <mat-progress-bar [bufferValue]="bufferValue" [color]="color" [mode]="mode" [value]="value"></mat-progress-bar>
        <p>Getting your files</p>
    </section>
`
});
Fullscreen.storyName = 'fullscreen';
Fullscreen.parameters = {
  layout: 'centered',
};
Fullscreen.argTypes = {
  ...progressSpinnerArgtypes,
  ...progressBarArgtypes
}
