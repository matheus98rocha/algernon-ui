"use server"
import { get } from '../utils/fetchWrapper';

export default async function getMe() {
  return get('users/me');
}