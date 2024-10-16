export class CreateAdminDto {
    id: number;
    fullname: string;
    email: string;
    phone_number: string;
    tg_link: string;
    hashed_password: string;
    hashed_refresh_token: string;
    is_active: boolean;
    is_creator: string;
}
