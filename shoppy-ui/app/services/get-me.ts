"use server"
import { get } from '../common/utils/fetchWrapper';

export default async function getMe() {
  return get('users/me');
}