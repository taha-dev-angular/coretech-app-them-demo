import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import {
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@ngneat/transloco';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
    selector: 'app-profile-page',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        TranslocoModule,
        TitleCasePipe,
        ReactiveFormsModule,
        MatOptionModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        NgFor,
        NgIf,
        MatDatepickerModule
    ],
    templateUrl: './profile-page.component.html',
    styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit {

    imageSrc: string = null;
    ImageFile: File = null;
    private readonly _formBuilder = inject(UntypedFormBuilder);
    public readonly destroyRef = inject(DestroyRef);
    gender = [
        {
            label: 'male',
            value: 0,
        },
        {
            label: 'female',
            value: 1,
        },
    ];
    profileForm: UntypedFormGroup;
    ngOnInit(): void {
        this.initProfileForm();
    }

    initProfileForm(): void {
        this.profileForm = this._formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            company: [''],
            Address: [''],
            Email_address: [],
            postion: ['', Validators.required],
            PersonalPhoto: [],
            dop: [],
            Gender: [],
            WorkPhone:[],
            mobile_phone:[]

        });
    }

  

    removeAvatar(): void {
        this.imageSrc = null;
        this.ImageFile = null;
    }

    uploadAvatar(fileList: FileList): void {
        // Return if canceled
        if (!fileList.length) {
            return;
        }

        // const allowedTypes = ['image/jpeg', 'image/png'];
        const file = fileList[0];

        // Return if the file is not allowed
        // if (!allowedTypes.includes(file.type)) {
        //     return;
        // }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imageSrc = reader.result as string;
        };
        this.ImageFile = file;
    }

    submit_profile(){

    }
}
